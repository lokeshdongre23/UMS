export class Role {
  constructor() {
    // this.name = name;
    this.permission = [];
  }
  addPermissions(permission) {
    try {
      this.permission.push(permission);
    } catch (error) {
      console.log(error);
    }
  }
  removepermission(permission) {
    this.permission = this.permission.filter((p) => {
      p.name !== permission;
    });
  }
}

// this only mmange the permission

// const role = new Role("lokesh");
// role.addPermissions("edit");

// console.log(role);

export default Role;
