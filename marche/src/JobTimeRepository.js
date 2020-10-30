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
       return jobtimes.get(date_string) || {};
    }
    
    /**
    *   addStamp
    *
    *   @param string jobname
    *   @return this
    */
    addStamp(jobname) {
       let jobtimes = this._getRepositoryData();
       let now = new Date();
       let date_string = now.getFullYear()
            + ('0' + (now.getMonth() + 1)).slice(-2)
            + ('0' + now.getDate()).slice(-2);
       
       jobtimes[date_string] || {};
       
       
       
       
       
       
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
