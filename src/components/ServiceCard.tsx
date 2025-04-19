
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, icon, className, style }: ServiceCardProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg group", className)} style={style}>
      <div className="h-2 bg-gradient-to-r from-sao2-blue to-sao2-blue-light"></div>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="p-2 rounded-full bg-sao2-blue/10 text-sao2-blue group-hover:bg-sao2-blue group-hover:text-white transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
