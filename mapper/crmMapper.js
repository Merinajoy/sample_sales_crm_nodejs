import { UserDTO, ClinicDTO } from './crmdto.js';

const transformClinicToDto = (clinic) => {
  const userDto = clinic.User
    ? new UserDTO(clinic.User.USER_ID, clinic.User.USER_NAME)
    : null;

  const clinicDto = new ClinicDTO(
    userDto,
    clinic.CLINIC_ID,
    clinic.CLINIC_NAME,
    clinic.ACTIVE,
    clinic.ADDRESS,
    clinic.CITY,
    clinic.CREATED_DATE,
    clinic.EMAIL,
    clinic.EMR_NAME,
    clinic.LAST_CONTACT,
    clinic.LAST_UPDATED,
    clinic.OFFICE_MANAGER_NAME,
    clinic.OWNER,
    clinic.PHONE,
    clinic.PHYSICIAN_NAME,
    clinic.STATE,
    clinic.ZIP
  );
  return clinicDto;
};

export { transformClinicToDto };
