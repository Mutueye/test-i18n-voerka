import { axiosDefInstance, PaginationModel, Result } from '@/utils/axios';

export interface SchoolModel {
  id: string;
  code: string;
  name: string;
  version: string;
  accessUrl: string;
}

export interface ConfigModel {
  collegeCode: string;
  collegeId: string;
  configKey: string;
  configValue: string;
  id: string;
  scope: string;
  scopeTitle: string;
}

/**
 * 取学校列表
 */
export const getSchoolList = () => {
  return axiosDefInstance.get<Result<PaginationModel<SchoolModel>>>('/base/schools?scope=app&organNature=Normal');
};

/**
 * 取学院配置列表
 */
export const getConfigList = () => {
  return axiosDefInstance.get<Result<ConfigModel[]>>('/base/config/college?param=UPLUS');
};
