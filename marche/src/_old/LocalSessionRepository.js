/**
*   LocalSessionRepository
*/
class LocalSessionRepository {
    /**
    *   @var object
    */
    _storage;
    
    /**
    *   constructor
    *
    */
    constructor() {
        this._storage = window.localStorage;
    }
    
    /**
    *   has
    *
    *   @param string name
    *   @return bool
    */
    has(name) {
       return this._storage.getItem(name) !== null; 
    }
    
    /**
    *   find
    *
    *   @param string name
    *   @return mixed
    */
    find(name) {
        if (!this.has(name)) {
            return null;
        }
        
        return JSON.parse(
            this._storage.getItem(name)
        );
    }
    
    /**
    *   findAll
    *
    *   @return object
    */
    findAll() {
        let results = {};
        
        for (let i = 0; i < this._storage.length; i++) {
            results[this._storage.key(i)] =
                JSON.parse(
                    this._storage.getItem(
                        this._storage.key(i)
                    )
                );
        }
        
        return results;
    }
    
    /**
    *   save
    *
    *   @param string name
    *   @param mixed value
    *   @return this
    */
    save(name, value) {
        this._storage.setItem(
            name,
            JSON.stringify(value)
        );
        return this;
    }
    
    /**
    *   remove
    *
    *   @param string name
    *   @return this
    */
    remove(name) {
        this._storage.removeItem(name);
        return this;
    }
    
    /**
    *   clear
    *
    *   @return this
    */
    clear() {
        this._storage.clear();
        return this;
    }
}
