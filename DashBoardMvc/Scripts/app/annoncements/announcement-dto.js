function AnnouncementDto(id, title, description) {

    if (description == null || $.trim(description) === "") {
        throw Error("Description is required.");
    }

    this.Id = id;
    this.Title = title;
    this.Description = description;

}