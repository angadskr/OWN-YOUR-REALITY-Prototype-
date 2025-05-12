"use client"

import { useState } from "react"
import {
  CalendarIcon,
  Plus,
  Music,
  Disc3,
  Shirt,
  Users,
  Video,
  Clock,
  MapPin,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ArtistSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [month, setMonth] = useState<Date>(new Date())

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Schedule</h2>
          <p className="text-zinc-400">Manage your upcoming events and releases</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-zinc-900 border-zinc-800 md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Calendar</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>{month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="rounded-md border border-zinc-800"
              classNames={{
                day_today: "bg-primary/20 text-primary-foreground",
                day_selected: "bg-primary text-primary-foreground",
              }}
              components={{
                DayContent: (props) => {
                  const date = props.date
                  const day = date.getDate()
                  const month = date.getMonth()
                  const year = date.getFullYear()

                  // Example events - in a real app, these would come from your data
                  const events = [
                    { date: new Date(2023, 5, 15), type: "release" },
                    { date: new Date(2023, 5, 20), type: "nft" },
                    { date: new Date(2023, 5, 25), type: "fashion" },
                    { date: new Date(2023, 5, 28), type: "fan" },
                    { date: new Date(2023, 6, 5), type: "release" },
                    { date: new Date(2023, 6, 12), type: "nft" },
                    { date: new Date(2023, 6, 18), type: "fashion" },
                    { date: new Date(2023, 6, 22), type: "fan" },
                  ]

                  const hasEvent = events.some(
                    (event) =>
                      event.date.getDate() === day &&
                      event.date.getMonth() === month &&
                      event.date.getFullYear() === year,
                  )

                  const eventType = events.find(
                    (event) =>
                      event.date.getDate() === day &&
                      event.date.getMonth() === month &&
                      event.date.getFullYear() === year,
                  )?.type

                  return (
                    <div className="relative">
                      <div>{day}</div>
                      {hasEvent && (
                        <div
                          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full
                            ${eventType === "release" ? "bg-blue-500" : ""}
                            ${eventType === "nft" ? "bg-pink-500" : ""}
                            ${eventType === "fashion" ? "bg-green-500" : ""}
                            ${eventType === "fan" ? "bg-amber-500" : ""}
                          `}
                        />
                      )}
                    </div>
                  )
                },
              }}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-zinc-400">Release</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-pink-500 mr-1"></div>
                <span className="text-xs text-zinc-400">NFT</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-zinc-400">Fashion</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-1"></div>
                <span className="text-xs text-zinc-400">Fan Event</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              {date
                ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
                : "Select a date"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "New Single Release",
                  type: "release",
                  date: "June 15, 2023",
                  time: "9:00 AM",
                  location: "All Streaming Platforms",
                  description: "Release of new single 'Summer Nights' across all major streaming platforms.",
                },
                {
                  id: 2,
                  title: "NFT Collection Launch",
                  type: "nft",
                  date: "June 20, 2023",
                  time: "2:00 PM",
                  location: "OYR NFT Marketplace",
                  description: "Launch of the 'Sonic Dreamscape' NFT collection with exclusive perks for holders.",
                },
                {
                  id: 3,
                  title: "Summer Fashion Drop",
                  type: "fashion",
                  date: "June 25, 2023",
                  time: "10:00 AM",
                  location: "OYR Fashion Store",
                  description: "Release of the Summer Tour merchandise collection with limited edition items.",
                },
                {
                  id: 4,
                  title: "Virtual Fan Meet & Greet",
                  type: "fan",
                  date: "June 28, 2023",
                  time: "7:00 PM",
                  location: "OYR Virtual Space",
                  description: "Live virtual meet & greet with premium subscribers and NFT holders.",
                },
              ].map((event) => (
                <div key={event.id} className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`
                        rounded-full p-2 flex-shrink-0
                        ${event.type === "release" ? "bg-blue-500/20" : ""}
                        ${event.type === "nft" ? "bg-pink-500/20" : ""}
                        ${event.type === "fashion" ? "bg-green-500/20" : ""}
                        ${event.type === "fan" ? "bg-amber-500/20" : ""}
                      `}
                      >
                        {event.type === "release" && <Music className="h-5 w-5 text-blue-500" />}
                        {event.type === "nft" && <Disc3 className="h-5 w-5 text-pink-500" />}
                        {event.type === "fashion" && <Shirt className="h-5 w-5 text-green-500" />}
                        {event.type === "fan" && <Users className="h-5 w-5 text-amber-500" />}
                      </div>
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center text-xs text-zinc-400 mt-1">
                          <CalendarIcon className="h-3 w-3 mr-1" /> {event.date}
                        </div>
                        <div className="flex items-center text-xs text-zinc-400 mt-1">
                          <Clock className="h-3 w-3 mr-1" /> {event.time}
                        </div>
                        <div className="flex items-center text-xs text-zinc-400 mt-1">
                          <MapPin className="h-3 w-3 mr-1" /> {event.location}
                        </div>
                        <p className="text-sm text-zinc-400 mt-2">{event.description}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Event</DropdownMenuItem>
                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
                        <DropdownMenuItem>Add Reminder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">Cancel Event</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Content Calendar</CardTitle>
          <CardDescription>Plan your content releases and promotions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-center font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const day = i + 1
                const hasEvent = [5, 8, 12, 15, 20, 22, 25, 28].includes(day)
                const eventType =
                  day === 5
                    ? "story"
                    : day === 8
                      ? "music"
                      : day === 12
                        ? "story"
                        : day === 15
                          ? "release"
                          : day === 20
                            ? "nft"
                            : day === 22
                              ? "story"
                              : day === 25
                                ? "fashion"
                                : day === 28
                                  ? "fan"
                                  : ""

                return (
                  <div key={i} className="bg-zinc-800 rounded-lg p-2 min-h-[80px] relative">
                    <div className="text-sm">{day}</div>
                    {hasEvent && (
                      <div
                        className={`
                        mt-1 p-1 text-xs rounded
                        ${eventType === "story" ? "bg-zinc-700 text-zinc-300" : ""}
                        ${eventType === "music" ? "bg-blue-500/20 text-blue-300" : ""}
                        ${eventType === "release" ? "bg-blue-500/30 text-blue-300" : ""}
                        ${eventType === "nft" ? "bg-pink-500/20 text-pink-300" : ""}
                        ${eventType === "fashion" ? "bg-green-500/20 text-green-300" : ""}
                        ${eventType === "fan" ? "bg-amber-500/20 text-amber-300" : ""}
                      `}
                      >
                        {eventType === "story" && "Post Story"}
                        {eventType === "music" && "Share Track"}
                        {eventType === "release" && "New Release"}
                        {eventType === "nft" && "NFT Drop"}
                        {eventType === "fashion" && "Fashion Drop"}
                        {eventType === "fan" && "Fan Event"}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="mr-2">
            <Plus className="h-4 w-4 mr-2" /> Add Content
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Video className="h-4 w-4 mr-2" /> Schedule Live Event
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
