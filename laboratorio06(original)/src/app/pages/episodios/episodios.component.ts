import { Component } from '@angular/core';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Episodios } from 'src/app/shared/models/Episodio';
import EpisodiosResponse from 'src/app/shared/models/EpisodioResponse';

const ELEMENT_DATA: Episodios[] = [];

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent {
  results: EpisodiosResponse;
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];
  dataSource = new MatTableDataSource<Episodios>();

  constructor(private srvEpisodios: EpisodiosService) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ApplyMethod() {
    this.srvEpisodios.episodios().subscribe((data: Episodios[]) => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {
    this.ApplyMethod();
  }
}
