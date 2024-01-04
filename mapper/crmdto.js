class ClinicDTO {
  constructor(
    user,
    clinicId,
    name,
    active,
    address,
    city,
    createdDate,
    email,
    emrName,
    lastContact,
    lastUpdated,
    officeManagerName,
    owner,
    phone,
    physicianName,
    // salesPerson,
    state,
    // userId,
    zip
  ) {
    this.clinicId = clinicId;
    this.name = name;
    this.active = active;
    this.address = address;
    this.city = city;
    this.createdDate = createdDate;
    this.email = email;
    this.emrName = emrName;
    this.lastContact = lastContact;
    this.lastUpdated = lastUpdated;
    this.officeManagerName = officeManagerName;
    this.owner = owner;
    this.phone = phone;
    this.physicianName = physicianName;
    // this.salesPerson = salesPerson;
    this.user=user;
    this.state = state;
    // this.userId = userId;
    this.zip = zip;
  }
}

class NotesDTO {
  constructor(noteId, clinicId, createdDate, note) {
    this.noteId = noteId;
    this.clinicId = clinicId;
    this.note = note;
    this.clinicId = clinicId;
    this.createdDate = createdDate;
  }
}

class UserDTO {
  constructor(
    userId,
    userName,
    // active,
    // firstName,
    // middleName,
    // lastName,
    // password,
    // updatedDate
  ) {
    this.userId = userId;
    this.userName = userName;
    // this.active = active;
    // this.firstName = firstName;
    // this.middleName = middleName;
    // this.lastName = lastName;
    // this.password = password;
    // this.updatedDate = updatedDate;
  }
}

export { UserDTO, ClinicDTO, NotesDTO };
