import { injectable } from "tsyringe";
import { User } from "../schemas/User"

@injectable()
class GetUserBySocketIdService {
  async execute(id_socket: string): Promise<User> {
    const user = await User.findOne({ id_socket });

    return user;
  }
}

export { GetUserBySocketIdService }