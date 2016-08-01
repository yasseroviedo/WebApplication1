using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult GetDetails(int id)
        {
            //Employee _emp = new Employee()
            //{
            //    EmployeeId = 1,
            //    Name="Lucas",
            //    Gender="Male",
            //    City="Los Angeles"

            //};
            EmployeeContext employeeContext = new EmployeeContext();
            Employee _emp = employeeContext.Employees.Single(emp => emp.EmployeeId == id);
            return View(_emp);
        }
    }
}