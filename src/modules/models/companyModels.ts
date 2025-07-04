import mongoose, { model, Schema, models } from "mongoose";

interface ICompanyModel {
  companyId: string;
  cnpj: string;
  email: string;
  contact: string;
  authorizedUsers: string[];
  stock: string;
}

mongoose.Promise = global.Promise;

const CompanySchema = new Schema<ICompanyModel>(
  {
    companyId: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    authorizedUsers: { type: [String], required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    stock: { type: String, required: true },
  },
  { timestamps: true }
);

export const CompanyModel = models.company || model("company", CompanySchema);
