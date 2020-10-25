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
    isString(value) {
        return typeof value === "string"
            && value !== "")
    }
    
    /**
    *   isTextDate
    *
    *   @param mixed value
    *   @return bool
    */
    isTextDate(value) {
        if (!Validator::isString(value)) {
            return false;
        }
        
        let re = /^\d{4}-\d{2}-\d{2}$/
        
        if (!re.test(value)) {
            return false;
        }
        
        let dt;
        
        try {
            dt = new Date(value + ' 00:00:00');
            return true;
        } catch (e) {
            return false;
        }
    }
    
    /**
    *   isTextDateTime
    *
    *   @param mixed value
    *   @return bool
    */
    isTextDateTime validJobName(value) {
        if (!Validator::isString(value)) {
            return false;
        }
        
        if (!Validator::isTextDate(value.substr(0, 10)) {
            return false;
        }
        
        if (value.substr(10, 1) !== " ") {
            return false;
        }
        
        if (!Validator::isTextTime(value.substr(12)) {
            return false;
        }
        return true;
    }
    
    /**
    *   isTextTime
    *
    *   @param mixed value
    *   @return bool
    */
    isTextTime(value) {
        if (!Validator::isString(value)) {
            return false;
        }
        
        let re = /^\d{2}:\d{2}:\d{2}$/
        
        if (!re.test(value)) {
            return false;
        }
        
        let dt;
        
        try {
            dt = new Date('2001-01-01 ' + value);
            return true;
        } catch (e) {
            return false;
        }
    }
}
