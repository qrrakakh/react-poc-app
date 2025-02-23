import AsyncLock from 'async-lock';

export type cb_arg = {
  isOnline: boolean;
}
export type cb_func = (arg: cb_arg) => void;

class ChatAPI {
  private cb_set: Set<cb_func>;
  private status: boolean;
  private lock: AsyncLock;

  constructor() {
    this.cb_set = new Set();
    this.status = false;
    this.lock = new AsyncLock({ timeout: 1000 * 30 });
  }

  sleep = ms => new Promise(res => setTimeout(res, ms));

  subscribeToFriendStatus(id:number, cb:cb_func) {
    this.lock.acquire('callback-lock', async() => {
      this.cb_set.add(cb);
    });
  }

  unsubscribeFromFriendStatus(id:number, cb:cb_func) {
    this.lock.acquire('callback-lock', async() => {
      this.cb_set.delete(cb);
    });
}

  async run() {
    while(1) {
      await this.sleep(1000 * 5);
      this.status = !this.status;
      console.log("status updated to "+this.status);
      
      this.lock.acquire('callback-lock', async() => {
        for (const cb of this.cb_set) {
          cb({isOnline: this.status});
        }
        this.cb_set.clear();
      });
    }
  }
}

const instance = new ChatAPI();
instance.run();

export default instance;