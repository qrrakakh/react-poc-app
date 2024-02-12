import AsyncLock from 'async-lock';

class ChatAPI {
  constructor() {
    this.cb_set = new Set();
    this.status = false;
    this.lock = new AsyncLock({ timeout: 1000 * 30 });
  }

  sleep = ms => new Promise(res => setTimeout(res, ms));

  subscribeToFriendStatus(id, cb) {
    this.lock.acquire('callback-lock', async() => {
      this.cb_set.add(cb);
    });
  }

  unsubscribeFromFriendStatus(id, cb) {
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