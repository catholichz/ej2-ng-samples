import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { GridModule, PageService } from '@syncfusion/ej2-ng-grids';
import { ToolbarModule } from '@syncfusion/ej2-ng-navigations';
import { DefaultComponent } from './default.component';
import { DataBindingComponent } from './remotedata.component';
import { LocalDataComponent } from './localdata.component';
import { ShowHideComponent } from './column/showhide.component';
import { StackedHeaderComponent } from './column/stackedheader.component';
import { AutoWrapComponent } from './column/autowrap.component';
import { ReorderComponent } from './column/reorder.component';
import { SortComponent } from './sorting.component';
import { PageComponent } from './paging.component';
import { FilterComponent } from './filtering.component';
import { SelectionComponent } from './selection.component';
import { SelectionApiComponent } from './selectionapi.component';
import { GroupComponent } from './grouping.component';
import { MasterComponent, DetailComponent } from './masterdetail.component';
import { SearchComponent } from './searching.component';
import { ScrollComponent } from './scrolling.component';
import { GridLinesComponent } from './gridlines.component';
import { DragAndDropComponent } from './draganddrop.component';
import { AggregateComponent } from './aggregatedefault.component';
import { AggregateGroupComponent } from './aggregategroup.component';
import { ColumnTemplateComponent } from './columntemplate.component';
import { RowTemplateComponent } from './rowtemplate.component';
import { DetailTemplateComponent } from './detailtemplate.component';
import { SharedModule } from '../common/shared.module';

export const gridRouteConfig: Object[] = [
    { 'path': 'grid/default', component: DefaultComponent, 'name': 'Default Functionalities', order: '01', category: 'Grid' },
    { 'path': 'grid/gridlines', component: GridLinesComponent, 'name': 'Grid Lines', order: '01', category: 'Grid' },
    { 'path': 'grid/paging', component: PageComponent, name: 'Paging', order: '01', category: 'Grid' },
    { 'path': 'grid/filtering', component: FilterComponent, name: 'Filtering', order: '01', category: 'Grid' },
    { 'path': 'grid/grouping', component: GroupComponent, name: 'Grouping', order: '01', category: 'Grid' },
    { 'path': 'grid/sorting', component: SortComponent, name: 'Sorting', order: '01', category: 'Grid' },
    { 'path': 'grid/scrolling', component: ScrollComponent, name: 'Scrolling', order: '01', category: 'Grid' },
    { 'path': 'grid/searching', component: SearchComponent, name: 'Searching', order: '01', category: 'Grid' },
    { 'path': 'grid/masterdetail', component: MasterComponent, name: 'Master/Detail', order: '01', category: 'Grid' },
    { 'path': 'grid/draganddrop', component: DragAndDropComponent, name: 'Row Drag And Drop', order: '01', category: 'Grid',
    hideOnDevice: true },
    { 'path': 'grid/localdata', component: LocalDataComponent, 'name': 'Local Binding', order: '02', category: 'Data Binding' },
    { 'path': 'grid/remotedata', component: DataBindingComponent, 'name': 'Remote Binding', order: '02', category: 'Data Binding' },
    { 'path': 'grid/column/showhide', component: ShowHideComponent, 'name': 'Show Hide Column',  order: '03', category: 'Column' },
    { 'path': 'grid/column/stackedheader', component: StackedHeaderComponent, name: 'Stacked Header', order: '03', category: 'Column' },
    { 'path': 'grid/column/autowrap', component: AutoWrapComponent, name: 'AutoWrap Column cells',  order: '03', category: 'Column' },
    { 'path': 'grid/column/reorder', component: ReorderComponent, name: 'Reorder Columns', order: '03', category: 'Column' },
    { 'path': 'grid/selection', component: SelectionComponent, name: 'Default Selection', order: '04', category: 'Selection' },
    { 'path': 'grid/selectionapi', component: SelectionApiComponent, name: 'Selection API', order: '04', category: 'Selection'},
    { 'path': 'grid/aggregatedefault', component: AggregateComponent, name: 'Default Aggregate', order: '05', category: 'Aggregate', 
    type: 'new' },
    { 'path': 'grid/aggregategroup', component: AggregateGroupComponent,
    name: 'Group and Caption aggregate', order: '05', category: 'Aggregate', type: 'new' },
    { 'path': 'grid/columntemplate', component: ColumnTemplateComponent, name: 'Column Template', order: '03',
    category: 'Column', type: 'new'},
    { 'path': 'grid/rowtemplate', component: RowTemplateComponent, name: 'Row Template', order: '01', category: 'Grid', type: 'new'},
    { 'path': 'grid/detailtemplate', component: DetailTemplateComponent, name: 'Detail Template', order: '01',
    category: 'Grid', type: 'new'}
];

let declarations: Type<Object>[] = [DefaultComponent, GridLinesComponent,
    LocalDataComponent, DataBindingComponent, ShowHideComponent, MasterComponent, DetailComponent, ReorderComponent,
    GroupComponent, StackedHeaderComponent, AutoWrapComponent, SortComponent, PageComponent, FilterComponent, SelectionComponent,
    ScrollComponent, SearchComponent, SelectionApiComponent, DragAndDropComponent, AggregateComponent, AggregateGroupComponent,
    RowTemplateComponent, ColumnTemplateComponent, DetailTemplateComponent];

@NgModule({
    imports: [RouterModule.forChild(gridRouteConfig), CommonModule, HttpModule, ToolbarModule, GridModule, SharedModule],
    declarations: declarations,
    providers: [PageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridSampleModule { }
