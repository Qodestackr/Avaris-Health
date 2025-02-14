import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, ShieldCheck, Pill, LineChart } from "lucide-react"
import Features from "@/components/features/features"

export default function Page() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6 flex flex-col gap-4 py-12">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your <span className="text-primary">Pharmacy</span>{" "}
                <span className="text-teal-600">Operations</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Avaris Health helps you prevent stockouts, detect counterfeits, and streamline compliance—all while
                boosting your bottom line with AI-powered insights.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Book Demo
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/10" />
                ))}
              </div>
              <div className="text-sm">
                Trusted by <span className="font-semibold">200+ pharmacies</span> across Kenya
              </div>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="absolute -top-4 -left-4 bg-primary/10 w-full h-full rounded-2xl" />
            <Card className="relative bg-card p-4 shadow-lg">
              <div className="absolute -top-6 -right-6">
                <div className="bg-primary text-primary-foreground p-3 text-xs rounded-full shadow-lg flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">200+</span>
                  <span className="text-sm">Happy Clients</span>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal-500" />
                    <h3 className="font-semibold">Counterfeit Detection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI-powered image analysis to spot fake medications in real-time
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-teal-500" />
                    <h3 className="font-semibold">Smart Inventory</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Predictive analytics to prevent stockouts before they happen
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-teal-500" />
                    <h3 className="font-semibold">Real-time Analytics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Actionable insights to optimize your pharmacy performance
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Features />
    </div>
  )
}

