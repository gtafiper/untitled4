import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../Users/Shared/user';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Product} from '../products/Shared/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: Observable<User[]>;
  usersCollection: AngularFirestoreCollection<User>;
  itemDoc: AngularFirestoreDocument<User>;

  constructor(private fs: AngularFirestore) {
    this.usersCollection = this.fs.collection('User');

    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;

      });
    }));
  }

  getUsers(): Observable<User[]> {
    return this.users;
  }

  deleteUser(user: User) {
    this.itemDoc = this.fs.doc(`User/${user.id}`);
    this.itemDoc.delete();
  }

  updateUser(user: User) {
   this.itemDoc = this.fs.doc(`User/${user.id}`);
   this.itemDoc.update(user);
  }
}
