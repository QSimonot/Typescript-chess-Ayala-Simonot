import axiosInstance from '@/config/AxiosConfig';
import { ApiUrlConnection } from '@/constants/ApiUrl';
import type { Move } from '@/model/Move.model';
import type { User } from '@/model/User.model';

export function useUserApi() {
  return {
    async getMove(user: User): Promise<string> {
      const res = await axiosInstance.get<{ move: string }>(`${ApiUrlConnection}`, {
        id: user.username
      });
      return res.data.move;
    },
  };
}
