'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    { name: "Mon", value: 320 },
    { name: "Tue", value: 280 },
    { name: "Wed", value: 485 },
    { name: "Thu", value: 390 },
    { name: "Fri", value: 220 },
    { name: "Sat", value: 280 },
    { name: "Sun", value: 190 },
]

export default function Features() {
    return (
        <section className="w-full py-12 bg-slate-50/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:grid-cols-[1fr,600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Is Manual Inventory Management Costing Your Pharmacy?
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                In today's fast-paced healthcare market, 70% of pharmacies struggle with stockouts and expired
                                medications. See how Avaris Health transforms your operations with real-time insights.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Prevent Stockouts & Optimize Inventory
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500">
                                    Get instant alerts when medication stock runs low or nears expiry. Our AI predicts demand patterns and
                                    automatically triggers reorders through M-Pesa integration, maintaining optimal inventory levels.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">Real-time Sales Analytics</AccordionTrigger>
                                <AccordionContent className="text-gray-500">
                                    Track medication sales across all branches in real-time. Understand prescription patterns, seasonal
                                    trends, and profitability at the SKU level—no more guesswork in your ordering.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">Customer Insights & Retention</AccordionTrigger>
                                <AccordionContent className="text-gray-500">
                                    Analyze patient buying patterns, prescription adherence, and retention rates. Use AI-powered insights
                                    to improve patient care and boost repeat visits.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="font-medium">
                                Schedule a Demo
                            </Button>
                            <Button size="lg" variant="outline" className="font-medium">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Card className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-semibold">Weekly Revenue</h3>
                                    <p className="text-sm text-gray-500">Average KES 485,000</p>
                                </div>
                                <div className="bg-primary/10 px-3 py-1 rounded-full">
                                    <span className="text-sm font-medium text-primary">+12.5%</span>
                                </div>
                            </div>
                            <div className="h-[240px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `${value}k`}
                                        />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="hsl(196 100% 37%)"
                                            fill="url(#gradient)"
                                            fillOpacity={0.2}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="hsl(196 100% 37%)" stopOpacity={0.4} />
                                                <stop offset="100%" stopColor="hsl(196 100% 37%)" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card className="p-6">
                                <h3 className="font-semibold mb-4">Inventory Health</h3>
                                <div className="text-3xl font-bold text-primary">98%</div>
                                <p className="text-sm text-gray-500">On-shelf availability</p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold mb-4">Patient Retention</h3>
                                <div className="text-3xl font-bold text-primary">85%</div>
                                <p className="text-sm text-gray-500">30-day return rate</p>
                            </Card>
                        </div>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-xl font-semibold text-primary">BH</span>
                                </div>
                                <div>
                                    <blockquote className="text-gray-500 italic mb-2">
                                        "Avaris Health has transformed how we manage our pharmacy chain. The real-time insights and
                                        automated ordering have increased our efficiency by 40%."
                                    </blockquote>
                                    <div className="font-semibold">Dr. Benjamin Hinga</div>
                                    <div className="text-sm text-gray-500">CEO, Bliss Healthcare</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}