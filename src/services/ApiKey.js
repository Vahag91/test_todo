// const apiKey11 = "AIzaSyArDBX_JMwnpJvYerOPwXZ3t5DTewBBpQk"


class ApiKey {

    static  url = "https://tasks.googleapis.com/"


     delete(id) {
        const deleteData = `${this.url}/tasks/v1/users/@me/lists/`
        return fetch(deleteData)
        .then(response => {
            if (!response.ok) {
              throw new Error();
            }
            return response.json();
          })
     }


}