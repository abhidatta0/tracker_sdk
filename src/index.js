const ANONYMOUS_ID_KEY = 'TRACKER_ANONYMOUS_ID_KEY';
const USER_ID_KEY = 'TRACKER_USER_ID_KEY';

class MyTracker{

  #clientKey;
  #anonymousId;
  #userId;

  init(clientKey){
    this.#clientKey = clientKey;
    console.log("calling init");
    this.#anonymousId = `anon_${new Date().getTime()}`;
    this.#persistAnonymousID(this.#anonymousId);
    return this.#anonymousId;
  }

  identify(userId, traits){
    this.#userId = userId;
    if(this.#checkIfAnonymousIdOrUserIsDefined()){
       // api call to send the traits
        console.log("called identify");
        this.#persistUserID(userId);

    }
   
  }

  track(event, properties) {
    if(this.#checkIfAnonymousIdOrUserIsDefined()){
        // get user data by the userId from db
        const user = {
            id: "user_123",
            traits: { email: "alice@example.com" }
        }

        console.log("logged event ", event);
        console.log({
        clientKey: this.#clientKey,
        event: event,
        anonymousId: this.#anonymousId,
        user,
        properties,
        timestamp: new Date().getTime()
    });
        console.log("called track");

    }

   
  }

  reset(){
    console.info("resetted");
    this.#removeAnonymousID();
    this.#removeUserID();
  }

  #checkIfAnonymousIdOrUserIsDefined(){
    return this.#anonymousId && this.#userId;
  }

  #persistAnonymousID(id){
    localStorage.setItem(ANONYMOUS_ID_KEY,id)
  }
  
  getAnonymousId(id){
    return localStorage.getItem(ANONYMOUS_ID_KEY,id)
  }
  
  #persistUserID = (id)=>{
    localStorage.setItem(USER_ID_KEY,id)
  }
  
  getUserId = (id)=>{
    return localStorage.getItem(USER_ID_KEY,id)
  }

  #removeUserID = (id)=>{
    this.#userId = null;
    localStorage.removeItem(USER_ID_KEY)
  }

   #removeAnonymousID = (id)=>{
    this.#anonymousId = null;
    localStorage.removeItem(ANONYMOUS_ID_KEY)
  }

};

export const myTracker = new MyTracker();
