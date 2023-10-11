using Application.Actvities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]   //{url}/api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities(){
            // return await _context.Activities.ToListAsync();
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //{url}/api/activities/123145
        public async Task<ActionResult<Activity>> GetActivity(Guid id){
            //return await _context.Activities.FindAsync(id);
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity (Activity activity){
            await Mediator.Send(new Create.Command { Activity = activity});
            return Ok();
        }
    }
}