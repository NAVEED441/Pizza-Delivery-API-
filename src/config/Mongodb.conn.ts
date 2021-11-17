import { connect , connection } from 'mongoose'
export default class Dbmongo {
    constructor(){}

    connect(h: string, dbName: string, u?: string, pass?: string, p?: number) {
        let connectionUri=`mongodb://${h}/${dbName}`;
        if (u != undefined && pass != undefined) {
            connectionUri = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
          }
        connect(connectionUri, (err: any) => {
            if (err) {
              console.log(err);
              console.log('DataBase Connection Falied');
            } else {
              console.log('connected with database');
            }
          });
    }
}
export const MonStatConnection = connection.readyState;