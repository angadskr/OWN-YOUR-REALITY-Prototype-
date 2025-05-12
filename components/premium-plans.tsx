"use client"

import { Check, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export default function PremiumPlans() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Choose Your Premium Experience</h2>
        <p className="text-zinc-400">
          Subscribe to get exclusive content, behind-the-scenes access, and special perks from your favorite artists.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For casual fans</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₹299</span>
              <span className="text-zinc-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to exclusive content from 3 artists of your choice</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Early access to new releases (24 hours)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Ad-free listening experience</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Monthly exclusive digital content</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-primary/90">Subscribe Now</Button>
          </CardFooter>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 relative">
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <Badge className="bg-primary text-white">Most Popular</Badge>
          </div>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>For dedicated fans</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₹599</span>
              <span className="text-zinc-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to exclusive content from 10 artists of your choice</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Early access to new releases (48 hours)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Ad-free listening experience</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Weekly exclusive digital content</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to virtual meet & greets</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>10% discount on merchandise</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-primary/90">Subscribe Now</Button>
          </CardFooter>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Ultimate</CardTitle>
            <CardDescription>For super fans</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₹999</span>
              <span className="text-zinc-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Unlimited access to exclusive content from all artists</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Early access to new releases (72 hours)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Ad-free listening experience</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Daily exclusive digital content</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority access to virtual meet & greets</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>20% discount on merchandise</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority access to concert tickets</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Exclusive physical merchandise quarterly</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-primary/90">Subscribe Now</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <h4 className="font-medium">How do I change my subscription plan?</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">You can change your plan at any time from your account settings.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-zinc-400 text-sm">
              You can upgrade or downgrade your subscription at any time from your account settings. Changes will take
              effect at the start of your next billing cycle.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <h4 className="font-medium">Can I cancel my subscription?</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Yes, you can cancel anytime with no penalty.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-zinc-400 text-sm">
              Yes, you can cancel your subscription at any time. You'll continue to have access to premium content until
              the end of your current billing period.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <h4 className="font-medium">How do I select my favorite artists?</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">You can select artists after subscribing.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-zinc-400 text-sm">
              After subscribing, you'll be prompted to select your favorite artists based on your subscription tier. You
              can change these selections at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
