import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from 'firebase/app';


export const firebaseConfig ={
  apiKey: "AIzaSyB8dV1ymvmMc6k7t6otbSK1ehZkDFymY1I",
  authDomain: "mta-task.firebaseapp.com",
  projectId: "mta-task",
  storageBucket: "mta-task.appspot.com",
  messagingSenderId: "596926578030",
  appId: "1:596926578030:web:5f4292ea3c1dcad15a157f",
  measurementId: "G-51KTJ4SZCR"
};

if(!firebase.apps.length){
    initializeApp(firebaseConfig);
}
