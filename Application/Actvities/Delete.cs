using MediatR;
using Persistence;

namespace Application.Actvities
{
    public class Delete
    {
        public class Command : IRequest{
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                //TODO error handling
                _context.Remove(activity);

                await _context.SaveChangesAsync();
                
            }

        }
    }
}