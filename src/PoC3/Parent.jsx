import { StateExample, ReducerExample, RefExample } from './State.jsx'
import { EffectExample } from './Effect.jsx'
import { ContextExample } from './Context.jsx'

export function Parent(props) {
    return (
      <div className="container poc-container">
        <h2 id="poc3">PoC 3 - React Hooks</h2>

        <h3>State example</h3>
        <div>
        <h4>Case 1: a simple state: useState</h4>
        <StateExample />
        </div>

        <div>
        <h4>Case 2: a reducer for complicated state updates: useReducer</h4>
        <ReducerExample></ReducerExample>
        </div>

        <div>
        <h4>Case 3: a state which is not rendered: useRef</h4>
        <RefExample></RefExample>
        </div>

        <hr />

        <h3>useEffect example</h3>
        <p>Friend status toggles by 5 sec.</p>
        <p>
        Friend status: <EffectExample friend={{id: 1}}/>
        </p>

        <hr />

        <h3>useContext example</h3>
        <ContextExample />

        <hr />
        <h3>TBD</h3>
        <ol>
        <li>useLayoutEffect</li>
        <li>useInsertionEffect</li>
        <li>useMemo</li>
        <li>useCallback</li>
        <li>useTransition</li>
        <li>useDeferredValue</li>
        </ol>

      </div>
    );
}
