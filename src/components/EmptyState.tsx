import React from 'react';
import { Package } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
