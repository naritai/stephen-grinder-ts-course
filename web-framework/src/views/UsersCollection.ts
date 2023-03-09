import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';
import { UserShow } from './UserShow';

export class UsersCollection extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserEdit(itemParent, model).render();
  }
}