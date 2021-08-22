import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const listAllUser = this.usersRepository.list();

    const usersExist = this.usersRepository.findById(user_id);
    if (!usersExist) {
      throw new Error("Not found user with id ");
    }
    if (!usersExist.admin) {
      throw new Error("You are not an administrator");
    }

    return listAllUser;
  }
}

export { ListAllUsersUseCase };
