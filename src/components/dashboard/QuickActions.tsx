import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { CreditCardIcon, PlusIcon, Wand2Icon } from "lucide-react";

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Get started with common actions</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link href="/image-generation" className="w-full">
          <Button className="w-full">
            <Wand2Icon className="mr-2 h-4 w-4" /> Generate Image
          </Button>
        </Link>
        <Link href="/model-training" className="w-full">
          {" "}
          <Button className="w-full" variant={"destructive"}>
            <PlusIcon className="mr-2 h-4 w-4" /> Train New Model
          </Button>
        </Link>
        <Link href="/billing" className="w-full">
          <Button variant="secondary" className="w-full">
            <CreditCardIcon className="mr-2 h-4 w-4" /> Billing
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
