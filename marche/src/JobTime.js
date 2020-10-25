/**
*   JobTime
*/
class JobTime {
    /**
    *   @var string
    */
    _job_name;
    
    /**
    *   @var string
    */
    _date_string;
    
    /**
    *   constructor
    *
    *   @param string job_name
    *   @param string date_string
    */
    constructor(job_name, date_string) {
        this._job_name = job_name;
        this._date_string = date_string;
        
        if (!this.validate) {
            throw "invalid data:"
                + Json.stringify([job_name, date_string]);
        }
    }
    
    /**
    *   validate
    *
    *   @return bool
    */
    validate() {
       return this.validJobName
        && this.validJobDate;
    }
    
    /**
    *   validJobName
    *
    *   @param string job_name
    *   @return bool
    */
    validJobName(job_name) {
       return Validator.isString(job_name)
        && job_name.length <= 20;
    }
    
    /**
    *   validJobDate
    *
    *   @param string job_name
    *   @return bool
    */
    validJobName(date_string) {
       return Validator.isTextDateTime(date_string);
    }
    
    /**
    *   jobName
    *
    *   @return string
    */
    jobName() {
       return this._job_name;
    }
    
    /**
    *   jobDate
    *
    *   @return string
    */
    jobDate() {
       return this._date_string.substr(0, 10);
    }
    
    /**
    *   jobDateTime
    *
    *   @return string
    */
    jobDateTime() {
       return this._date_string;
    }
    
    /**
    *   jobTime
    *
    *   @return bool
    */
    jobDate() {
       return this._date_string.substr(12);
    }
}
