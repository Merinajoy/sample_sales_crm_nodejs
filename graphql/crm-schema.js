const crmTypeDefs = `

type clinicDto{
  address:String
  billing:String
  challenges:String
  city: String
  clinicId:Int
  clinicName:String
  coding:String
  createdDate:String
  durationOfRelationShip:String
  email:String
  emrName:String
}

type ClinicsListResponse{
  statusCode:Int
  status:String
  data:[clinicDto]
}
type Query {
    findAllClinics(): ClinicsListResponse
  }
`;

export default crmTypeDefs;
