import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOption } from "../interfaces/filters-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
    if(STATUS_NOT_SELECTED){
      return usersList;
    }
    const filteredList = usersList.filter((user)=> user.ativo === status);
    return filteredList;
  }

  const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if(DATES_NOT_SELECTED) {
      return usersList
    }
    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    }));
    return listFiltered
  }

const filterUsersList = (filterOption: IFilterOption, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    
    filteredList = filterUsersListByName(filterOption.name, usersList);
    filteredList = filterUsersListByStatus(filterOption.status, filteredList);
    filteredList = filterUsersListByDate(filterOption.startDate, filterOption.endDate, filteredList)
    return filteredList;
  }

export { filterUsersList };