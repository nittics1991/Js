/**
*   Validator
*/
class Validator {
    /**
    *   isString
    *
    *   @param mixed value
    *   @return bool
    */
    static isString(value) {
        return typeof value === "string"
            && value !== "";
    }
    
    /**
    *   isTextDate yyyy-mm-dd
    *
    *   @param mixed value
    *   @return bool
    */
    static isTextDate(value) {
        if (!Validator.isString(value)) {
            return false;
        }
        
        let re = /^\d{4}-\d{2}-\d{2}$/;
        
        if (!re.test(value)) {
            return false;
        }
        
        let dt;
        
        try {
            dt = new Date(value + ' 00:00:00');
        } catch (e) {
            return false;
        }
        
        let local_dt = new Date(
            dt.getTime() - dt.getTimezoneOffset() * 1000 * 60
        );
        
        try {
            return local_dt.toISOString().substr(0, 10) === value;
        } catch (e) {
            return false;
        }
    }
    
    /**
    *   isTextDateTime yyyy-mm-dd hh:ii:ss
    *
    *   @param mixed value
    *   @return bool
    */
    static isTextDateTime(value) {
        if (!Validator.isString(value)) {
            return false;
        }
        
        if (!Validator.isTextDate(value.substr(0, 10))) {
            return false;
        }
        
        if (value.substr(10, 1) !== " ") {
            return false;
        }
        
        if (!Validator.isTextTime(value.substr(11))) {
            return false;
        }
        return true;
    }
    
    /**
    *   isTextTime hh:ii:ss
    *
    *   @param mixed value
    *   @return bool
    */
    static isTextTime(value) {
        if (!Validator.isString(value)) {
            return false;
        }
        
        let re = /^\d{2}:\d{2}:\d{2}$/
        
        if (!re.test(value)) {
            return false;
        }
        
        let dt;
        
        try {
            dt = new Date('2001-01-01 ' + value);
        } catch (e) {
            return false;
        }
        
        try {
            return dt.toTimeString().substr(0, 8) === value;
        } catch (e) {
            return false;
        }
    }
}
