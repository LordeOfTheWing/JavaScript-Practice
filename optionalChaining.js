const people = [
  {
    name: 'Bob',
    location: { street: '123 Main street', timezone: { offset: '+7:00' } },
  },
  {
    name: 'Peter',
    location: { street: '123 Pine Street' },
  },
  {
    name: 'Susan',
    location: { street: '123 Apple Street', timezone: { offset: '+9:00' } },
  },
];

people.forEach((person) => {
  // console.log(person.name)
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // );
  console.log(person?.location?.timezone?.offset || 'has no timezone');
});
