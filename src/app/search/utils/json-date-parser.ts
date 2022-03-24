import {TuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';

export class JsonDateParser
    implements TuiControlValueTransformer<TuiDay | null, string | null>
{
    fromControlValue(controlValue: string | null): TuiDay | null {
        return controlValue === null ? null : TuiDay.jsonParse(controlValue);
    }

    toControlValue(componentValue: TuiDay | null): string | null {
        return componentValue && componentValue.toJSON();
    }
}
