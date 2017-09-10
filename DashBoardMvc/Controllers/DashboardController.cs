using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DashBoardMvc.Models;
using Newtonsoft.Json;
using System.Net;

namespace DashBoardMvc.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
           var d = true;
            ViewBag.IsAdmin= JsonConvert.SerializeObject(d);
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
        [HttpPost]
        public ActionResult UpdateAnnouncement(Announcement announcement)
        {
            //return View();
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [HttpPost]
        public ActionResult DeleteAnnouncement(Announcement announcement)
        {
            //return View();
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}