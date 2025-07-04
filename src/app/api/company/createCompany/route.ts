import { CompanyModel } from "@/modules/models/companyModels";
import { connectMongo } from "@/modules/mongodb";
import { CompanySchema, createCompany } from "@/schemas/createCompanySchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = (await request.json()) as createCompany;
  try {
    await connectMongo();
    CompanySchema.parse(data);
    const verifyCompany = await CompanyModel.findOne({ cnpj: data.cnpj });

    if (verifyCompany) {
      return NextResponse.json(
        { message: "Esta empresa ja esta cadastrada" },
        { status: 409 }
      );
    }
    const newCompany = new CompanyModel({
      companyId: data.companyId,
      cnpj: data.cnpj,
      email: data.email,
      contact: data.contact,
      stock: ` ${data.companyId} stock`,
      authorizedUsers: ["user1"],
    });
    await newCompany.save();
    return NextResponse.json({ message: "sucess", data });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 400,
      }
    );
  }
}
