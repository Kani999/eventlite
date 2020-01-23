class EventsController < ApplicationController
  def index
    @events = [
      {
        title: "London Retail Expo",
        datetime: "Monday 21 Oct, 2019 10:00 am GMT",
        location: "London Excel Centre"
      },
      {
        title: "Bělá Retail Expo",
        datetime: "Monday 21 Oct, 2019 10:00 am GMT",
        location: "Bělá Excel Centre"
      },
      {
        title: "Opava Retail Expo",
        datetime: "Monday 21 Oct, 2019 10:00 am GMT",
        location: "Opava Excel Centre"
      }
    ]
  end
end
