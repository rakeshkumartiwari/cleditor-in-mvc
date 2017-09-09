using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DashBoardMvc.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }


        public static List<Announcement> GetAllAnnouncements()
        {
            var announcementsList = new List<Announcement>
            {
                new Announcement
                {
                    Id=1,
                    Title="Birthday",
                    Description="Today is my birthday"
                },
                new Announcement
                {
                    Id = 2,
                    Title = "Meeting",
                    Description = "Meeting at 9:00 O'clock"
                }


            };


            return announcementsList;
        }
    }
}