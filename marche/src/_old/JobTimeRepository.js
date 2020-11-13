/**
*   JobTimeRepository
*/
class JobTimeRepository {
    /**
    *   @var string
    */
    _NAMESPACE = 'jobtime';
    
    /**
    *   @var object
    */
    _repository;
    
    /**
    *   constructor
    *
    *   @param object repository
    */
    constructor(repository) {
        this._repository = repository;
    }
    
    /**
    *   timecard
    *
    *   @param ?string date_string
    *   @return ?JobTime
    */
    timecard(date_string) {
       let jobtimes = this._getRepositoryData();
       return jobtimes.get(date_string) || new JobTme();
    }
    
    /**
    *   addStamp
    *
    *   @param string jobname
    *   @return this
    */
    addStamp(jobname) {
       let jobtimes = this._getRepositoryData();
       let date_string = (new Date).toISOString().substr(0, 10);
       let jobtime = new JobTime(jobname, new Date());
       
       if (! jobtimes[date_string] instanceof Array) {
           jobtimes[date_string] = [];
       }
       
       jobtimes[date_string].push(jobtime);
       
       this._repository.save(this._NAMESPACE, jobtimes);
       
       return this;
    }
    
    /**
    *   removeStamp
    *
    *   @param string date_string
    *   @param int index
    *   @return this
    */
    removeStamp(date_string, index) {
       
       return this;
    }
    
    /**
    *   totalList
    *
    *   @param string date_string
    *   @return JobTime[]
    */
    totalList(date_string) {
       
    }
    
    /**
    *   jobList
    *
    *   @return string[]
    */
    jobList() {
       
    }
    
    /**
    *   _getRepositoryData
    *
    *   @return ?Map
    */
    _getRepositoryData() {
       let jobtimes = this._repository.find(this._NAMESPACE);
       
       if (jobtimes === null
        || ! jobtimes instanceof Map
       ) {
           return null;
       }
       return jobtimes;
    }
}
