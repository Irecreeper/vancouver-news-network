/*
This script accesses... the database! If the name didn't give it away.
Specifically, this retrieves articles from the database, and tosses them into a JSON array.
*/

const ObjectID = require('mongodb').ObjectID;
const MongoConnection = require('./MongoConnection');

const database = 'COMP2930-Project'
const collection = 'Articles'

const connect = () => new MongoConnection(); //see MongoConnection.js

class DbAccess {
  getArticles() {
    //called by dataRouter.js
    const connection = connect()

    return new Promise((resolve, reject) => {
      connection
        .open()
        .then(() => {
          connection.collection
            .find({ articleNo: { $exists: false } })
            .toArray()
            .then(articles => {
              resolve(articles)
              //connection.close();
            })
            .catch(error => {
              reject(error)
              connection.close()
            })
        })
        .catch(error => {
          reject(error)
          connection.close()
        })
    })
  }

    getArticlesEnergy() { //called by dataRouter.js
        const connection = connect();

        return new Promise((resolve, reject) => {
            connection.open()
            .then(() => {
                connection.collectionEnergy.find({articleNo: {$exists: false}}).toArray()
                .then(articles => {
                    resolve(articles);
                    //connection.close();
                })
                .catch(error => {
                    reject(error);
                    connection.close();
                });
            })
            .catch(error => {
                reject(error);
                connection.close();
            });
        });
    }

    getArticlesPollution() { //called by dataRouter.js
        const connection = connect();

        return new Promise((resolve, reject) => {
            connection.open()
            .then(() => {
                connection.collectionPollution.find({articleNo: {$exists: false}}).toArray()
                .then(articles => {
                    resolve(articles);
                    //connection.close();
                })
                .catch(error => {
                    reject(error);
                    connection.close();
                });
            })
            .catch(error => {
                reject(error);
                connection.close();
            });
        });
    }

    getArticlesRecycling() { //called by dataRouter.js
        const connection = connect();

        return new Promise((resolve, reject) => {
            connection.open()
            .then(() => {
                connection.collectionRecycling.find({articleNo: {$exists: false}}).toArray()
                .then(articles => {
                    resolve(articles);
                    //connection.close();
                })
                .catch(error => {
                    reject(error);
                    connection.close();
                });
            })
            .catch(error => {
                reject(error);
                connection.close();
            });
        });
    }
  
}

module.exports = DbAccess
