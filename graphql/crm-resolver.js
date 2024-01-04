import { Clinic, User, sequelize } from '../database';
import { transformClinicToDto } from '../mapper/crmMapper';
import _ from 'lodash';

import { Op, literal } from 'sequelize';

const crmResolver = {
  Query: {
    findAllClinics: async () => {
      try {
        const clinic = await Clinic.count({
          where: whereClause,
          include: [
            // {
            //   model: Clinic,
            //   as: 'Clinic', // Use left join
            //   attributes: ['CLINIC_ID', 'NAME'],
            // },
            { model: User, as: 'User', attributes: ['USER_ID', 'USER_NAME'] },
          ],
        });
        const clinics = Clinic.findAll({
          where:whereClause,
          include:[
            {
              model:User,
              as:User
            },
          ],
          order: [['CLINIC_ID', 'DESC']],
          offset: start, // Start index for pagination
          limit,
        })

        const clinicDTOs = clinics.map(transformClinicToDto7)
      } catch {}
    },
  },

  
};

const constructWhereClause = (searchCriteriaAttributes) => {
    const where = {};
  
    const addCondition = (
      key,
      value,
      operator = Op.eq,
      caseInsensitive = false
    ) => {
      if (value !== undefined && value !== null) {
        if (key.includes(".")) {
          // Handle associations
          const [association, field] = key.split(".");
          if (!where[association]) {
            where[association] = {};
          }
          if (typeof value === "string" && operator === Op.like) {
            const likeOperator = caseInsensitive ? Op.like : Op.like;
            where[association][field] = literal(`LOWER('%${value}%')`);
          } else if (Array.isArray(value)) {
            where[association][field] = { [operator]: value };
          } else {
            where[association][field] = value;
          }
        } else {
          // Handle regular fields
          if (typeof value === "string" && operator === Op.like) {
            const likeOperator = caseInsensitive ? Op.like : Op.like;
            where[key] = literal(`LOWER('%${value}%')`);
          } else if (Array.isArray(value)) {
            where[key] = { [operator]: value };
          } else {
            where[key] = value;
          }
        }
      }
    };
