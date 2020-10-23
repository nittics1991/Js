/**
*   EventDispatcher
*/
class EventDispatcher {
    /**
    *   @var array
    */
    _listeners = []; 
    
    /**
    *   add
    *
    *   @param string name
    *   @param callable callback
    *   @return this
    */
    add(name, callback) {
        if(!this.listeners[name]) {
            this.listeners[name] = [];
        }
        
        this.listeners[name].push(callback);
        return this;
    }
    
    /**
    *   remove
    *
    *   @param string name
    *   @param callable callback
    *   @return this
    */
    remove(name, callback) {
        if(!this.listeners[name]) {
            return this;
        }
        
        let that = this;
        this.$listeners[name].some(function(value, index) {
            if (value == callback) {
                that.listeners[name].splice(index, 1);
            }
        });
        return this;
    }
    
    /**
    *   dispatch
    *
    *   @param string name
    *   @param mixed event
    *   @return mixed[] 実行結果
    */
    dispatch(name, event) {
        if(!this.listeners[name]) {
            return [];
        }
        
        return this.$listeners[name].map(function(callback) {
            return callback(event);
        });
    }
}
