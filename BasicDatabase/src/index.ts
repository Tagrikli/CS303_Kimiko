
import { Db, MongoClient } from 'mongodb';
import { UserData } from './types';
import ERRORS  from './errors.json';

var url = "mongodb://localhost:27017/kimikodb";


class KimikoDB {
    db: Db | undefined;
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    connect() {
        MongoClient.connect(this.url, (err, db) => {
            if (err) throw err;
            if (!db) throw ERRORS.DB_UND;
            this.db = db.db();
        })
    }

    addUser(user_data: UserData) {
    
        if (!this.db) throw ERRORS.DB_UND;

        this.db.collection('users')



    }







}



mclient.connect(url, (err, db) => {

    if (err || !db) throw err;


    let dbo = db.db('kimikodb');

    dbo.createCollection('users');


})
