import { CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function EndingPage() {
  const navigate = useNavigate()

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Verification Complete
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-primary/80">
          Your business and identity verification process has been successfully completed.
        </p>
        <p className="text-center text-primary/50 mt-4">
          Thank you for your cooperation. You may now proceed with using our services.
        </p>

        <div className="flex justify-center mt-4">
          <Button onClick={() => {
              navigate('/dashboard')
            }}>
            Back to Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};