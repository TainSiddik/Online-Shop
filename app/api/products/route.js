import { connectDB } from '@/lib/mongodb';
import Products from '@/models/Products';
import { NextResponse } from 'next/server';

// CREATE
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newProduct = await Products.create(data);
    return NextResponse.json(newProduct);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// READ
export async function GET() {
  try {
    await connectDB();
    const products = await Products.find();
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
