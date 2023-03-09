import { User } from './models/User';
import { UsersCollection } from './views/UsersCollection';

const usersCollecction = User.buildUserCollection();
usersCollecction.fetch();

usersCollecction.on('change', () => {
  const collectionView = new UsersCollection(
    document.getElementById('root') as HTMLElement,
    usersCollecction
  );

  collectionView.render();
});