import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { toast } from './components/ui/toast'
import { Toaster } from './components/ui/toast'
import { LucideGithub, LucideCode } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  const showToast = () => {
    toast('Hello from Sonner!', {
      description: 'This is a toast notification using Sonner',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo')
      },
    })
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <Toaster />
      <div className="container mx-auto space-y-8">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Vite + React + TypeScript Starter</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI Components</CardTitle>
              <CardDescription>Beautiful, accessible UI components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This starter template includes pre-configured shadcn/ui components that are ready to use.
              </p>
              <div className="flex gap-2">
                <Button onClick={showToast}>Show Toast</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Built with Tailwind CSS and Radix UI primitives
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Counter Example</CardTitle>
              <CardDescription>State management with React hooks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-4xl font-bold">{count}</p>
                <div className="flex gap-2">
                  <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
                  <Button onClick={() => setCount(count + 1)}>Increment</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-1"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <LucideGithub className="h-4 w-4" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-1"
                onClick={() => window.open('https://react.dev', '_blank')}
              >
                <LucideCode className="h-4 w-4" />
                Documentation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
