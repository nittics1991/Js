/**
*   JobTime
*/
class JobTime {
    /**
    *   @var string
    */
    _id;
    
    /**
    *   @var string
    */
    _job_name;
    
    /**
    *   @var Date
    */
    _date;
    
    /**
    *   constructor
    *
    *   @param string job_name
    *   @param Date date_object
    */
    constructor(job_name, date_object) {
        this._job_name = job_name;
        this._date = date_object;
        
        if (!this.validate) {
            throw "invalid data:"
                + Json.stringify([job_name, date_object]);
        }
        
        this._id = this.jobDateTime();
    }
    
    /**
    *   validate
    *
    *   @return bool
    */
    validate() {
       return JobTime.validJobName(this._job_name)
        && JobTime.validJobDate(this._date);
    }
    
    /**
    *   validJobName
    *
    *   @param string value
    *   @return bool
    */
    static validJobName(value) {
       return Validator.isString(value)
        && value.length <= 20;
    }
    
    /**
    *   validJobDate
    *
    *   @param string value
    *   @return bool
    */
    static validJobDate(value) {
       return value instanceof Date;
    }
    
    /**
    *   jobName
    *
    *   @return string
    */
    id() {
       return this._id;
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
       return this.jobDateTime().substr(0,10)
    }
    
    /**
    *   jobDateTime
    *
    *   @return string
    */
    jobDateTime() {
        let local_date = new Date(
            this._date.getTime()
                - this._date.getTimezoneOffset() * 60 * 1000
            );
       return local_date.toISOString().substr(0, 19).replace('T', ' ');
    }
    
    /**
    *   jobTime
    *
    *   @return bool
    */
    jobTime() {
       return this._date.toTimeString().substr(0,5);
    }
}
