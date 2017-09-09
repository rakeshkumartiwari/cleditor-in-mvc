using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DashBoardMvc.Models;

namespace DashBoardMvc.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllAnnouncements()
        {
            var announcementList = Announcement.GetAllAnnouncements();

            return new JsonResult { Data = announcementList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public JsonResult GetAnnouncement(int id)
        {
            var announcement = Announcement.GetAllAnnouncements().FirstOrDefault(i=>i.Id==id);

            return new JsonResult { Data = announcement, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}