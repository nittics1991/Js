/**
*   JobTimes
*/
class JobTimes extends Map{
    /**
    *   constructor
    *
    *   @param ?iterable iterable
    */
    constructor(iterable) {
        super();
        
        for 
        
        
    }
    
    /**
    *   set
    *
    *   @param JobTime jobtime
    *   @return string ID
    */
    set(jobtime) {
        if (! jobtime instanceof Jobtime) {
            throw "must be jobTime:"
                + Json.stringify(jobtime);
        }
        
        this._container.set(jobtime.id(), jobtime);
        return jobtime.id();
    }
    
    /**
    *   has
    *
    *   @param string id
    *   @return bool
    */
    has(id) {
        return this._container.has(id);
    }
    
    /**
    *   get
    *
    *   @param string id
    *   @return Jobtime
    */
    get(id) {
        if (! this.has(id)) {
            throw "not defined ID:" + id;
        }
        
        return this._container.get(id);
    }
    
    /**
    *   delete
    *
    *   @param string id
    *   @return bool
    */
    delete(id) {
        return this._container.delete(id);
    }
    
    /**
    *   keys
    *
    *   @return bool
    */
    keys() {
        return this._container.keys();
    }
    
    /**
    *   size
    *
    *   @return int
    */
    size() {
        return this._container.size;
    }
    
    /**
    *   forEach
    *
    *   @param callable callback(?val, ?key, ?this_arg)
    *   @return this
    */
    forEach(callback, this_arg) {
        this._container.forEach(callback, this_arg);
        return this;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
